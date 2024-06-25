import logo from '../assets/investment-calculator-logo.png';

export function Header() {
    return (
        <header id="header">
            <img src={logo} alt="investment-logo" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}