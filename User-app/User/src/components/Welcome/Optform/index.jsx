import React from 'react';
import { Container, Input, Break, Button, Text, ButtonLink } from './styles/styles';
import { ArrowForwardOutline } from 'react-ionicons'

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button{...restProps}>
            {children}
            <ArrowForwardOutline
                color={'#ffff'}
                width='30px'
                height='40px'
                margin-left='10px'
            />
        </Button>
    );
};
OptForm.ButtonLink = function OptFormButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}
        <ArrowForwardOutline
            color={'#ffff'}
            width='30px'
            height='40px'
            margin-left='10px'
        />
    </ButtonLink>;
};
OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
    return <Break {...restProps} />;
};