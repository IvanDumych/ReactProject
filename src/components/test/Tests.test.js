import ReactDOM from "react-dom"
import React from "react"
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";
import {Main} from '../auth/home'
import {Login} from '../auth/login'
import {Profile} from '../auth/profile'
import {Register} from '../auth/register'
import {Reservation} from '../auth/reserve_audience'
import {Footer} from '../footer/footer'
import {TodoPage} from '../header/header'

test("renders Main", ()=>{
    const{asFragment} = render(<Main/>);
});

test("renders Login", ()=>{
    const{asFragment} = render(<Login/>);
});

test("renders Profile", ()=>{
    const{asFragment} = render(<Profile/>);
});

test("renders Register", ()=>{
    const{asFragment} = render(<Register/>);
});

test("renders Reservation", ()=>{
    const{asFragment} = render(<Reservation/>);
});

test("renders Header", ()=>{
    const{asFragment} = render(<TodoPage/>);
});

test("renders Footer", ()=>{
    const{asFragment} = render(<Footer/>);
});




// yarn test --coverage
