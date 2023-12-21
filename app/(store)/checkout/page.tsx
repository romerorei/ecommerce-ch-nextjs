import { CheckoutComponent } from "@/components/CheckoutComponent";

export async function generateMetadata() {

  return {
      title: `STORE - Checkout`,
  }
}

export default function Checkout() {


  return (
      <>
        <CheckoutComponent/>
      </>
  );
}
