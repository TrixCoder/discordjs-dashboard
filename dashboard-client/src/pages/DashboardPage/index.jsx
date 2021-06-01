import React from 'react';
import { getUserDetails } from '../../utils/api';
import { Formik } from 'formik';
import { Input, Button } from '@chakra-ui/react'

export function DashboardPage({
    history,
}) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [prefix, setPrefix] = React.useState('!');

    React.useEffect(() => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data);
                setUser(data);
                setLoading(false);
            }).catch((err) => {
                history.push('/')
                setLoading(false);
            });
    }, [])
    return !loading && (
        <div>
            <h1>Dashboard Page</h1>
            <Formik
                initialValues={{ prefix }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Input type="text" name="prefix" onChange={props.handleChange} defaultValue={prefix} />
                            <Button type="submit" colorScheme="orange" children="Update Prefix" />
                        </form>
                    )}
            </Formik>
        </div>
    )


}