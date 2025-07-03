import { fireEvent, render, screen } from '@testing-library/react';
import CustomerList from './CustomerList';

describe("testing <CustomerList />", () => {
    it("renders <CustomerList />", () => {
        render(<CustomerList />);
        // screen.debug();
        const element = screen.getByText(/Rachel/i);
        expect(element).toBeInTheDocument();
    })

    it("delete a customer <CustomerList />", () => {
        render(<CustomerList />);
        // screen.debug();
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[2]);
        btns = screen.getAllByRole('button');
        expect(btns.length).toBe(5);
    })

     it("filter customers <CustomerList />", () => {
        render(<CustomerList />);
        // screen.debug();
        let txtBox = screen.getByPlaceholderText(/search by name/i);
        fireEvent.change(txtBox, {"target": {"value": "Geller"}});
        // screen.debug();
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(2);
    })
})