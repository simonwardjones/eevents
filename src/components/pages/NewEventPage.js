import React from "react";
import Form from "../generic/forms/Form";
import Input from "../generic/fields/Input";
import GridColumnToRow from "../generic/grids/GridColumnToRow";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import { yupResolver } from "@hookform/resolvers/yup";
import GridItem from "../generic/grids/GridItem";
import GridContainer from "../generic/grids/GridContainer";

const Schema = yup.object().shape({
    event_name: yup
        .string()
        .min(3, "needs to be longer, Silad! :(")
        .max(10, "I can't handle something that big, Silad!")
        .required("Shtick it in my box"),
});

// const Schema = yup.object().shape({
//     event_name: yup
//         .string()
//         .min(3, "Hello Silad")
//         .max(10, "Hello Silad")
//         .required("Hello Silad"),
// });

const NewEventPage = () => {
    const form = useForm({ resolver: yupResolver(Schema), mode: "onChange" });

    return (
        <Form>
            <GridContainer>
                <GridItem xs={12} sm={6}>
                    <Input
                        name="event_name"
                        ref={form.register}
                        helperText={form.errors?.event_name?.message}
                        error={!!form.errors.event_name}
                        label="Event Name"
                    />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="host_name" label="Host Name" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="description" label="Description" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="location" label="Location" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="guests_qty" label="No. Of Guests" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="year" label="Year" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="month" label="Month" />,
                    <Input name="day" label="Day" />
                </GridItem>
                <GridItem xs={12} sm={6}>
                    <Input name="contact_number" label="Contact Number" />
                </GridItem>
            </GridContainer>
        </Form>
    );
};

export default NewEventPage;
