"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, Divider, Button} from "@nextui-org/react";
import { useCartContext } from "@/components/context/CartContext";
import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";


  export const columns = [
    {name: "TITLE", uid: "title"},
    {name: "PRICE", uid: "price"},
    {name: "QUANTITY", uid: "quantity"},
    {name: "ACTIONS", uid: "actions"},
  ];

  export const statusColorMap: Record<string, ChipProps["color"]>  = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };

const ShoppingCard = () => {
  const { user } = useAuthContext()

  const { cart, totalQty } = useCartContext()
  console.log("totalQty",totalQty());
  console.log("cart", cart);

  type Item = typeof cart[0];
  const renderCell = React.useCallback((item: Item, columnKey: React.Key) => {
    const cellValue:any = item[columnKey as keyof Item];

    switch (columnKey) {
      case "title":
      return (
          <User
          avatarProps={{radius: "lg", src: item.image}}
          name={cellValue}
          >
            {item.title}
          </User>
      );
      case "price":
      return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{item.price}</p>
          </div>
      );
      case "QUANTITY":
      return (
          <Chip className="capitalize" color={statusColorMap[item.quantity]} size="sm" variant="flat">
            {cellValue}
          </Chip>
      );
      case "actions":
      return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <p>Delete</p>
              </span>
            </Tooltip>
          </div>
      );
      default:
      return cellValue;
    }
  }, []);

  return (
    ( user.logged ?
              <div className="container m-auto mt-3 mb-5">
                <Table aria-label="Example table with custom cells">
                  <TableHeader >
                    {columns.map((column) =>
                      <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items ={cart} >
                    {(item) => (
                      <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
                <Divider className="my-4" />
                <div className="flex justify-end h-5 items-center space-x-4 text-small">
                  <div>Total:</div>
                  <Divider orientation="vertical" />
                  <div>$180</div>
                  <Divider orientation="vertical" />
                  <Button color="primary">
                        <Link href={"/checkout"}>
                          Ir al pago
                        </Link>
                  </Button>
                </div>
              </div>
              : <div>
                  <h1>Inicie sesion para ver su carrito</h1>
                  <Button color="primary">
                        <Link href={"/login"}>
                          Login
                        </Link>
                  </Button>
                </div>
    )

  );
}

export default ShoppingCard;
