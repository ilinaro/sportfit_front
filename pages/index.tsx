import type { TypeA } from "../types";

const Example: TypeA = {
    name: "next",
};

export const Home: React.FC = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>
                <p>{Example.name}</p>
            </h1>
        </div>
    );
}