// outsource
import React from 'react';
import {Col, Row, Image} from "react-bootstrap";

// local dependencies
import img from '../assets/preloader.svg';
import {IoIosInfinite} from "react-icons/io";

export default function Preloader({isOpen}: any) {


    return (
        <Row className={isOpen?'':'d-none'}>
            <Col className='text-center'>
                <Image src={img} roundedCircle className='page-preloader'/>
            </Col>
        </Row>
    )
}

export function NumberPreloader({isOpen, number}: any) {
    number = number || '';
    return isOpen ?
            <IoIosInfinite className={`number-preloader ${isOpen? '':'d-none'}`}/>
        :
            number;
}
