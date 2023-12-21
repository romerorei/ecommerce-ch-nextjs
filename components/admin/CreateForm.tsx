"use client"

import { useState, ChangeEvent, FormEvent  } from "react"
import Boton from "../ui/Boton"
import { collection, doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"

interface FormValues {
    title: string;
    description: string;
    inStock?: number;
    price: number;
    category: string;
}

const createProduct = async (values: FormValues, file: File | null) => {
    if (!file) {
        console.error("No se proporcionó un archivo para subir.");
        return;
    }

    const storageRef = ref(storage, values.title)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)

    //const docRef = doc(db, "products", values.title)
    const docRef = await doc(collection(db, "products"))
    console.log(docRef)
    console.log(docRef.id)
    return setDoc(docRef, {
        id: docRef.id,
        ...values,
        image: fileURL,
        rating: { count: 0, rate: 0.0 }
    }).then(() => console.log("Producto creado exitosamente"))
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        category: ''
    })
    const [file, setFile] = useState<File | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        //console.log(values)
       await createProduct(values, file)

    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Category: </label>
                <input
                    type="text"
                    value={values.category}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="category"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files![0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateForm
