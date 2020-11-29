import React, { useState, useEffect } from "react";
import {
  TextInput,
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  ModalHeader,
  ModalBody,
  Form,
  Button,
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  TableToolbar,
  TableBatchAction,
  TableBatchActions,
  TableSelectRow,
  TableSelectAll,
  TableToolbarSearch,
  TableToolbarContent,
  ComposedModal,
  Loading,
} from "carbon-components-react";
import "./Dashboard.scss";

const HEADERS = [
  {
    key: "name",
    header: "Name",
  },
  {
    key: "email",
    header: "Email",
  },
  {
    key: "phone",
    header: "Phone",
  },
  {
    key: "city",
    header: "City",
  },
  {
    key: "country",
    header: "Country",
  },
];

function Dashboard({ history, setLoggedIn }) {
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState(HEADERS);
  const [searchInput, setSearchInput] = useState(null);
  const [open, setOpen] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [searchedRows, setSearchedRows] = useState([]);

  const rowLength = rows.length;

  useEffect(() => {
    fetch("https://5fc37639e5c28f0016f54a7e.mockapi.io/info")
      .then((resp) => resp.json())
      .then((result) => {
        result.forEach((obj) => (obj.id = parseInt(obj.id)));
        setIsLoading(false);
        setRows(result);
      });
  }, []);

  const batchActionClick = (selectedRows) => {
    var temp = rows;
    selectedRows.forEach((selection) => {
      temp = temp.filter((row) => row.id !== selection.id);
    });

    setRows(temp);
  };

  const onInputChange = (e) => {
    setSearchInput(e.target.value);

    if (searchInput) {
      let searchKeyword = searchInput.toLowerCase();

      let filteredRows = rows.filter(
        (data) =>
          data.name.toLowerCase().includes(searchKeyword) ||
          data.email.toLowerCase().includes(searchKeyword) ||
          data.phone.toLowerCase().includes(searchKeyword) ||
          data.city.toLowerCase().includes(searchKeyword) ||
          data.country.toLowerCase().includes(searchKeyword)
      );
      setSearchedRows(filteredRows);
    } else {
      setSearchedRows([]);
    }
  };

  const handleOnRowAdd = (event) => {
    event.preventDefault();

    const newRow = {
      id: rowLength + 1,
      name: firstName,
      email: email,
      phone: phone,
      city: city,
      country: country,
    };
    setRows([...rows, newRow]);
    setFirstName("");
    setEmail("");
    setPhone("");
    setCity("");
    setCountry("");
    setOpen(false);
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setLoggedIn(false);

    history.push("/");
  };

  return (
    <div>
      <Header aria-label="XOPA Platform Name">
        <HeaderName href="#" prefix="XOPA"></HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Log out" onClick={handlelogout}>
            LOG OUT
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      {!isLoading ? (
        <div className="table">
          <DataTable
            rows={searchInput ? searchedRows : rows}
            headers={headers}
            isSortable
          >
            {({
              rows,
              headers,
              getHeaderProps,
              getRowProps,
              getSelectionProps,
              getBatchActionProps,
              selectedRows,
              getTableProps,
            }) => (
              <TableContainer title="DataTable">
                <TableToolbar>
                  <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? 0 : -1
                      }
                      onClick={() => {
                        batchActionClick(selectedRows);
                      }}
                    >
                      Delete
                    </TableBatchAction>
                  </TableBatchActions>
                  <TableToolbarContent>
                    <TableToolbarSearch
                      defaultExpanded
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? -1 : 0
                      }
                      onChange={(e) => onInputChange(e)}
                    />
                    <Button
                      tabIndex={
                        getBatchActionProps().shouldShowBatchActions ? -1 : 0
                      }
                      onClick={(e) => setOpen(true)}
                      size="small"
                      kind="primary"
                    >
                      <div className="addButton"> Add new</div>
                    </Button>
                  </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow {...getRowProps({ row })}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map((cell) => (
                          <TableCell className="table-cell" key={cell.id}>
                            {cell.value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DataTable>

          <ComposedModal
            open={open}
            onClose={() => setOpen(false)}
            size="sm"
            passiveModal
          >
            <ModalHeader>Enter the Details</ModalHeader>
            <ModalBody>
              <Form className="modal-form" onSubmit={handleOnRowAdd}>
                <TextInput
                  required
                  className="text-input"
                  type="text"
                  labelText="Name"
                  placeholder="name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextInput
                  required
                  className="text-input"
                  type="email"
                  labelText="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextInput
                  required
                  className="text-input"
                  type="text"
                  labelText="Phone Number"
                  placeholder="phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextInput
                  required
                  className="text-input"
                  type="text"
                  labelText="City"
                  placeholder="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextInput
                  required
                  className="text-input"
                  type="text"
                  labelText="Country"
                  placeholder="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <Button className="submit-button" type="submit">
                  Add Details
                </Button>
              </Form>
            </ModalBody>
          </ComposedModal>
        </div>
      ) : (
        <Loading small />
      )}
    </div>
  );
}

export default Dashboard;
