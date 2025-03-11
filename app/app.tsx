import React from 'react';

export default function App() {
	return (
		<>
		<div className="column">
                <div className="row" style={{ height: "50%" }}>
                    <h1>Contex Desk</h1>
                    <section>
                        <h2></h2>
                        <p></p>
                    </section>
                </div>
                <div className="row" style={{ height: "50%" }}>Unten Links</div>
            </div>
            <div className="column">
                <div className="row" style={{ height: "50%" }}>Oben Rechts</div>
                <div className="row" style={{ height: "50%" }}>Unten Rechts</div>
            </div>
		</>
	)
}