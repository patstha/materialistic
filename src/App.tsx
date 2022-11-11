import { useState } from 'react'
import './App.css'
import { Button } from '@fluentui/react-components'
import MaterialTable, { Column } from "@material-table/core";
import { Analytics } from '@vercel/analytics/react';

interface IPerson {
  firstName: string;
  lastName: string;
  birthYear: number;
  availability: boolean;
}

const lookup = { true: "Available", false: "Unavailable" };

const columns: Array<Column<IPerson>> = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
  { title: "Availablity", field: "availability", lookup }
];

const data: Array<IPerson> = [
  { firstName: "Tod", lastName: "Miles", birthYear: 1987, availability: true },
  { firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false }
];

function sayHello() {
  console.info("Hello");
}

function renderGreeting(name: string, language: "English" | "Spanish"): string {
  if (language === "English") {
    return "Hello, ${name}";
  }
  if (language == "Spanish") {
    return "Hola, ${name}";
  }
  return "";
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>renderGreeting("Carlos", "Spanish")</p>
      <MaterialTable columns={columns} data={data} />
      <Button appearance="primary" onClick={sayHello}>Fluently yours</Button>
      <Analytics />
    </div>
  )
}

export default App
