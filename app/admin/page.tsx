"use client"
import React from "react";
import { mockData  } from "@/data/products"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";


export const columns = [
    {name: "ID", uid: "id"},
    {name: "TITLE", uid: "title"},
    {name: "PRICE", uid: "price"},
    {name: "CATEGORY", uid: "category"},
    {name: "ACTIONS", uid: "actions"},
  ];

  export const statusColorMap: Record<string, ChipProps["color"]>  = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };


type Item = typeof mockData[0];


const ProductsAdmin = () => {


    const renderCell = React.useCallback((item: Item, columnKey: React.Key) => {
        const cellValue:any = item[columnKey as keyof Item];
        // console.log('CK', columnKey)
        // console.log('CV', cellValue)
        // console.log(item);


        switch (columnKey) {
            case "id":
            return (
                <p>{cellValue}</p>
            );
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
                    <p>V</p>
                    </span>
                </Tooltip>
                <Tooltip content="Edit">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <p>E</p>
                    </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <p>D</p>
                    </span>
                </Tooltip>
                </div>
            );
            default:
            return cellValue;
        }
    }, []);

      return (
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
      );
    }


export default ProductsAdmin;
