"use client"
import React from "react";
//import { mockData  } from "@/data/products"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, Divider, Button} from "@nextui-org/react";


export const mockData = [
  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men-clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "quantity": 4
  },
  {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men-clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "quantity": 1
  },
  {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men-clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "quantity": 2
  }]

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


type Item = typeof mockData[0];


const ShoppingCard = () => {


    const renderCell = React.useCallback((item: Item, columnKey: React.Key) => {
        const cellValue:any = item[columnKey as keyof Item];
        // console.log('CK', columnKey)
        // console.log('CV', cellValue)
        // console.log(item);


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
        <div className="container m-auto mt-3 mb-5">
          <Table aria-label="Example table with custom cells">
            <TableHeader >
              {columns.map((column) =>
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items ={mockData} >
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
              Ir al pago
            </Button>
          </div>
        </div>
      );
    }


export default ShoppingCard;
