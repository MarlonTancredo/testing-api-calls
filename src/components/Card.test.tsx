import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";
import useFetchPersonName from './useFetchPerson';

const useFetchPersonNameMock = useFetchPersonName as jest.Mock;

jest.mock('./useFetchPerson');

describe("Card Test", () => {
    it("should displays Fetching when the data is undefined", () => {
        render(<Card />);

        expect(screen.getByText(/Fetching.../i)).toBeInTheDocument();
    });

    it("should displays Name: Luke Skywalker", () => {
        useFetchPersonNameMock.mockReturnValue('Name: Luke Skywalker');

        render(<Card />);

        expect(screen.getByText(/Name: Luke Skywalker/i)).toBeInTheDocument();
    });
})