import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
return (
<BrowserRouter basename={process.env.PUBLIC_URL}>
<Routes>
<Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} /> 
</Routes>
</BrowserRouter>
);
}

export default App;