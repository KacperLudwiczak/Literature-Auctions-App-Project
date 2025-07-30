'use client';

import {Auction} from "@/types";
import {Table, TableBody, TableCell, TableRow} from "flowbite-react";

type Props = {
    auction: Auction
}
export default function DetailedSpecs({auction}: Props) {
    return (
        <Table striped={true}>
            <TableBody>
                <TableRow className="bg-white dark:border-gray-500 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900">
                        Seller
                    </TableCell>
                    <TableCell>
                        {auction.seller}
                    </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-500 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900">
                        Name
                    </TableCell>
                    <TableCell>
                        {auction.name}
                    </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-500 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900">
                        Year created
                    </TableCell>
                    <TableCell>
                        {auction.year}
                    </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-500 dark:bg-gray-800">
                    <TableCell className="whitespace-nowrap font-medium text-gray-900">
                        Has reserve price?
                    </TableCell>
                    <TableCell>
                        {auction.reservePrice > 0 ? 'Yes' : 'No'}
                    </TableCell>                  
                </TableRow>
            </TableBody>
        </Table>
    );
}