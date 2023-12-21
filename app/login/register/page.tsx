import RegisterFormClient from "@/components/auth/RegisterForm";


export async function generateMetadata({params, searchParams}:any, parent:any) {

  return {
      title: `STORE - Registro`,
  }
}

const  signUpPage = () => {

  return (

      <main className="m-auto p-5">
        <RegisterFormClient />
      </main>
  );
  }

export default signUpPage
