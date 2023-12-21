"use client"

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCartContext } from "./context/CartContext"

export function CheckoutComponent() {
  const { cart, totalQty } = useCartContext()

  return (
    <main className="flex flex-col lg:flex-row gap-6 px-6 py-4 lg:px-12 lg:py-8 bg-white">
      <div className="w-full lg:w-2/3 space-y-6 ">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input className="w-full" id="name" placeholder="John Doe" type="text" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input className="w-full" id="address" placeholder="Rosas 1245" type="text" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input className="w-full" id="city" placeholder="Santiago" type="text" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input className="w-full" id="state" placeholder="Region Metropolitana" type="text" />
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input className="w-full" id="cardName" placeholder="John Doe" type="text" />
              </div>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input className="w-full" id="cardNumber" placeholder="1234 5678 9012 3456" type="text" />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input className="w-full" id="expiry" placeholder="MM/YY" type="text" />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input className="w-full" id="cvv" placeholder="123" type="text" />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Button className="w-full lg:w-1/3">Complete Purchase</Button>
      </div>
      <div className="w-full lg:w-1/3 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            { cart.map((item:any) =>

              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    -
                  <span className="line-clamp-1">{item.title}</span>
                </div>
                <span>${item.price}</span>
              </div>
              )
            }
            <div className="border-t border-gray-200 mt-4 pt-4 flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span className="font-medium">$69.98</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
