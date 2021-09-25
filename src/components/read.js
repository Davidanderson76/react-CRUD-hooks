import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://614a996207549f001755a967.mockapi.io/fakeData`)
      .then((res) => {
        setAPIData(res.data);
      });
  }, []);

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Subscribed</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? "Yes" : "No"}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
