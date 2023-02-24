import React from "react";
import Body from "../Body";
import makeRequest from "../../../utils/makeRequest";
import { mockBlogPostData } from "../../../mocks/mockBlogPostData"
import { render, waitFor, screen } from "@testing-library/react";

jest.mock("../../../utils/makeRequest")

describe('Body', () => {
    it('should show loading text when data is still loading', async () => {
        const mockMakeRequest = makeRequest
        mockMakeRequest.mockResolvedValue(mockBlogPostData);
        render(<Body />);
        expect(screen.getByText("Loading")).toBeTruthy();
        await waitFor(() => {
            expect(screen.getByText("mock title 1")).toBeTruthy();
        });
    });

    it('should show blog posts when data is loaded', async () => {
        const mockMakeRequest = makeRequest;
        mockMakeRequest.mockResolvedValue(mockBlogPostData);
        render(<Body />);
        await waitFor(() => {
        expect(screen.getAllByTestId('card-test')).toHaveLength(2);
        });
    });

    it('should show error message when there is error in data fetch', async () => {
        const mockMakeRequest = makeRequest;
        mockMakeRequest.mockRejectedValue({message: "Error!!!!"});
        render(<Body />);
        await waitFor(() => {
            expect(screen.getByText("Error!!!!")).toBeTruthy();
        });
    });
});





// describe("BlogPosts", () => {
//   it("should show error message when there is error in data fetch", async () => {
//     const mockMakeRequest = makeRequest
//     mockMakeRequest.mockRejectedValue({ message: "Error!!!!" });
//     render(<BlogPosts />);
//     await waitFor(() => {
//       expect(screen.getByText("Error!!!!")).toBeTruthy();
//     });
//   });
// });