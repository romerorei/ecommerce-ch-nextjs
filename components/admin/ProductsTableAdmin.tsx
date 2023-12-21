"use client"
import React, { useCallback, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps} from "@nextui-org/react";
import Link from "next/link";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface ItemProps {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    inStock:     number;
}

export const columns = [
    {name: "ID", uid: "id"},
    {name: "TITLE", uid: "title"},
    {name: "PRICE", uid: "price"},
    {name: "STOCK", uid: "inStock"},
    {name: "CATEGORY", uid: "category"},
    {name: "ACTIONS", uid: "actions"},
];

export const statusColorMap: Record<string, ChipProps["color"]>  = {
active: "success",
paused: "danger",
vacation: "warning",
};



const ProductsTableAdmin: React.FC<{ itemList: ItemProps[] }> = ({ itemList })  => {

    //console.log(itemList)
    const [data, setData] = useState(itemList);

    const handleDelete = useCallback(
        async (id:string) => {
            console.log(id)

            try{
                await deleteDoc(doc(db, "products", id))
                console.log(`Producto con ID ${id} eliminado correctamente`);
                // Actualizar el estado local después de la eliminación
                setData((prevData) => prevData.filter((item) => item.id !== id));

            } catch (error){
                console.error('Error al eliminar el documento:', error);
            }
        }, [setData]
    );

    const renderCell = React.useCallback((item: ItemProps, columnKey: React.Key) => {
        const cellValue:any = item[columnKey as keyof ItemProps];

        switch (columnKey) {
            case "title":
                return (
                    <User avatarProps={{radius: "lg", src: item.image}}
                    name={cellValue}
                    >
                        {item.title}
                    </User>
                );
            case "price":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                    </div>
                );
            case "inStock":
                return (
                    <div className="flex flex-col">
                        { item?.inStock
                                ? <p className="text-bold text-sm capitalize ">{item?.inStock }</p>
                                : <p className="text-bold text-sm capitalize text-default-400">S/I</p>
                        }
                    </div>
                );
            case "category":
                return (
                    <Chip className="capitalize" color={statusColorMap[item.category]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                <div className="relative flex items-center gap-2">
                    <Tooltip content="Details">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Link target="_blank" href={`/products/detail/${item.id}`}>
                                <p>V</p>
                            </Link>
                        </span>
                    </Tooltip>
                    <Tooltip content="Edit">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                            <Link href={`/admin/edit/${item.id}`}>
                                <p>E</p>
                            </Link>
                        </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                            <button onClick={() => handleDelete(item.id)}>
                                <p>D</p>
                            </button>
                        </span>
                    </Tooltip>
                </div>
                );
            default:
            return cellValue;
        }
    }, [handleDelete]);

    return (
    <Table aria-label="Example table with custom cells">
        <TableHeader >
            {columns.map((column) =>
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                    {column.name}
                </TableColumn>
            )}
        </TableHeader>
        <TableBody items ={data}>
            {(item) => (
                <TableRow key={item.id}>
                    {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
            )}
        </TableBody>
    </Table>
    );
}

export default ProductsTableAdmin;
