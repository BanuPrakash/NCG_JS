import { fireEvent, render, screen } from '@testing-library/react';
import CustomerRow from './CustomerRow';

{/* <CustomerRow
                        key={customer.id}
                        delEvent={(id) => this.deleteCustomer(id)}
                        customer={customer} /> */}
describe("testing <CustomerRow> in isolation", () => {
    // mock customer 
    let customer = {
        id: 10,
        firstName: 'Harry',
        lastName: 'Potter',
        gender: 'male'
    };

    let callback = jest.fn(); // mock function for deleteCustomer

    it("renders <CustomerRow />", () => {
        render(<CustomerRow customer={customer} delEvent={(id) => callback(id)} />);
        const element = screen.getByText(/Harry/i);
        screen.debug();
        expect(element).toBeInTheDocument();
    });

    it("delete customer event <CustomerRow />", () => {
        render(<CustomerRow customer={customer} delEvent={(id) => callback(id)} />);

        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(10);
    })

})