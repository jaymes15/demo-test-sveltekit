import Home from "./+page.svelte";
import {render, screen} from "@testing-library/svelte"
import "@testing-library/jest-dom";

describe("Home Page", ()=>{

    it("has header", ()=>{

        render(Home)
    
        const header = screen.getByRole("heading", {name: "Sign Up"});
    
        expect(header).toBeInTheDocument();
    
    })
})
