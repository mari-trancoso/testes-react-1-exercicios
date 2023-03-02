import { render, screen } from "@testing-library/react"
import Calculator from "../components/Calculator"
import userEvent from "@testing-library/user-event"

describe("calculator", () => {
    test("Garanta em pelo menos um teste que a aplicação é renderizada corretamente com os dígitos de operações +, -, *, e /.", () => {

        render(<Calculator />)

        screen.logTestingPlaygroundURL()
        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        const buttonSub = screen.getByRole('button', {
            name: /\-/i
        })
        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        const buttonDiv = screen.getByRole('button', {
            name: /\//i
        })
        expect(buttonSum).toBeInTheDocument()
        expect(buttonSub).toBeInTheDocument()
        expect(buttonMult).toBeInTheDocument()
        expect(buttonDiv).toBeInTheDocument()
    })

    test("Garanta em pelo menos dois testes que a multiplicação está funcionando corretamente.", async() => {
        const user = userEvent.setup()
        render(<Calculator />)

        screen.logTestingPlaygroundURL()
        const button4 = screen.getByRole('button', {
            name: /4/i
        })
        const button2 = screen.getByRole('button', {
            name: /2/i
        })
        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        const buttonEqual = screen.getByRole('button', {
            name: /\=/i
        })

        await user.click(button4)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonEqual)
        
        const value = screen.getByTestId("result")
        expect(value).toHaveTextContent("8")

    })

    test("Garanta em pelo menos um teste que concatenar operações está funcionando corretamente.", async() => {
        const user = userEvent.setup()
        render(<Calculator />)

        // screen.logTestingPlaygroundURL()
        const button4 = screen.getByRole('button', {
            name: /4/i
        })
        const button2 = screen.getByRole('button', {
            name: /2/i
        })
        const button1 = screen.getByRole('button', {
            name: /1/i
        })
        const buttonMult = screen.getByRole('button', {
            name: /\*/i
        })
        const buttonSum = screen.getByRole('button', {
            name: /\+/i
        })
        const buttonEqual = screen.getByRole('button', {
            name: /\=/i
        })

        await user.click(button2)
        await user.click(button4)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonMult)
        await user.click(button2)
        await user.click(buttonEqual)
        
        const value = screen.getByTestId("result")
        expect(value).toHaveTextContent("96")

    })
})