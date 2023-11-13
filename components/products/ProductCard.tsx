'use client'
import { Product } from "@/interfaces/products"
import Image from "next/image"
import Link from "next/link"

import {Card, CardBody, CardFooter, Image as ImageNXUI} from "@nextui-org/react";

interface Props {
  item : Product
}

export const ProductCard = ({ item }:Props) => {


  return (
        <Card className="m-2 basis-72 px-3"  key={item.id} isPressable onPress={() => console.log("item pressed")}>
          <Link href={`/products/detail/${item.id}`}>
            <CardBody className="overflow-visible ">
              <Image
                width={500}
                height={500}
                alt={item.title}
                className="w-full h-[200px]"
                src={item.image}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              {/* <p className="text-default-500">${item.price}</p> */}
            </CardFooter>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
          </div>
        </Card>
        );
}



