'use client';

import { Button, Spinner } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createAuction, updateAuction } from "../actions/auctionActions";
import toast from "react-hot-toast";
import { Auction } from "@/types";
import DateInput from "@/app/components/DateInput";
import Input from "@/app/components/Input";

type Props = {
    auction?: Auction;
}

export default function AuctionForm({ auction }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const { control, handleSubmit, setFocus, reset,
        formState: { isSubmitting, isValid, isDirty } } = useForm({
            mode: 'onTouched'
        });

    useEffect(() => {
        if (auction) {
            const { name, genre, year } = auction;
            reset({ name, genre, year })
        }
        setFocus('make')
    }, [setFocus, auction, reset])

    async function onSubmit(data: FieldValues) {
        try {
            let id = '';
            let res;
            if (pathname === '/auctions/create') {
                res = await createAuction(data);
                id = res.id;
            } else {
                if (auction) {
                    res = await updateAuction(data, auction.id);
                    id = auction.id;
                }
            }
            if (res.error) {
                throw res.error;
            }
            router.push(`/auctions/details/${id}`)
        } catch (error: any) {
            toast.error(error.status + ' ' + error.message)
        }
    }

    return (
        <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Input name="name" label="Name" control={control}
                rules={{ required: 'Name is required' }} />
            <Input name="genre" label="Genre" control={control}
                rules={{ required: 'Genre is required' }} />
            <Input name="year" label="Year" type='number' control={control}
                    rules={{ required: 'Year is required' }} />

            {pathname === '/auctions/create' &&
            <>
                <Input name="imageUrl" label="Image URL" control={control}
                    rules={{ required: 'Image URL is required' }} />

                <div className="grid grid-cols-2 gap-3">
                    <Input name="reservePrice" label="Reserve price (enter 0 if no reserve)"
                        type='number' control={control}
                        rules={{ required: 'Reserve price is required' }} />
                    <DateInput
                        name="auctionEnd"
                        label="Auction end date/time"
                        control={control}
                        showTimeSelect
                        dateFormat='dd MMMM yyyy h:mm a'
                        rules={{ required: 'Auction end date is required' }}
                    />
                </div>
            </>}


            <div className="flex justify-between">
                <Button color='alternative' onClick={() => router.push('/')}>Cancel</Button>
                <Button
                    outline
                    color='green'
                    type="submit"
                    disabled={!isValid || !isDirty}
                >
                    {isSubmitting && <Spinner size="sm" />}
                    Submit
                </Button>
            </div>
        </form>
    )
}