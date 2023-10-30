import { waitFor } from "@testing-library/react";
import { Parallel , job } from "./parallelProcessing";



describe("parallel", () => {
    const logSpy = jest.spyOn(console, "log");
    it("Parallel is a function", () => {
        expect(Parallel).toBeInstanceOf(Function);
    })

    it("parallel function test", async () => {
        const runner = new Parallel(2);
        const jobs = Array<job>();
        
        for (let i = 1; i <= 5; i ++){
            jobs.push(
                () => new Promise((resolve) => setTimeout(resolve, i*10, i))
            )
        }
        await runner.jobs(...jobs);

        waitFor(() => {
            expect(logSpy).toHaveBeenCalledWith("[1, 3, 2, 4, 5]")
        })
    })
})