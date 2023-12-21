import EditForm from "@/components/admin/EditForm"


interface EditPageProps {
  params: {
    id: string;
  };
}

const EditPage: React.FC<EditPageProps> = async ({ params }) => {
    const { id } = params
    const item = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`,
    {cache: "no-store"
    }).then(r => r.json())
    //const item = await getProductsById(id)
    console.log({item})
    console.log(id)

    return (
        <div>
            <EditForm item={item}/>
        </div>
    )
}

export default EditPage
