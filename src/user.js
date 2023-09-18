import 'bootstrap/dist/css/bootstrap.min.css';
import DataList from './data.json';
import { Link, useNavigate } from 'react-router-dom';
// import Province from './province.json';

function User() {

  let history = useNavigate();

  const handleEdit = (
    Id,
    username,
    password,
    firstName,
    lastName,
    cardId,
    birthDate,
    mobileNumber,
    email,
    height,
    weight,
    address,
    subdistrict,
    district,
    province,
    postcode

  ) => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('cardId', cardId);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('email', email);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
    localStorage.setItem('address', address);
    localStorage.setItem('subdistrict', subdistrict);
    localStorage.setItem('district', district);
    localStorage.setItem('province', province);
    localStorage.setItem('postcode', postcode);
    localStorage.setItem('Id', Id);
  }

  console.log(handleEdit)

  const handleDelete = (Id) => {
    var index = DataList.map((e) => {
      return e.Id
    }).indexOf(Id);
    DataList.splice(index, 1);
    history('/');
  }

  return (
    <div className='m-3'>
      <div className='d-flex justify-content-between'>
        <h1>Data list</h1>
        <Link to={`/create`}>
          <button className='btn btn-success m-2 px-4 py-2'>
            <i className="fa-solid fa-plus"></i> Create</button>
        </Link>
      </div>
      <div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-striped border mt-2">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Id card</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Email</th>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th scope="col">Address</th>
                <th scope="col">Province</th>
                <th scope="col">District</th>
                <th scope="col">Subdistrict</th>
                <th scope="col">Postcode</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {DataList.map((DataList) => (
                <tr key={DataList.Id}>
                  <th>{DataList.Id}</th>
                  <td>{DataList.firstName}</td>
                  <td>{DataList.lastName}</td>
                  <td>{DataList.cardId}</td>
                  <td>{DataList.birthDate}</td>
                  <td>{DataList.mobileNumber}</td>
                  <td>{DataList.email}</td>
                  <td>{DataList.height}</td>
                  <td>{DataList.weight}</td>
                  <td>{DataList.address}</td>
                  <td>{DataList.province}</td>
                  <td>{DataList.district}</td>
                  <td>{DataList.subdistrict}</td>
                  <td>{DataList.postcode}</td>
                  <td className='text-center'>
                    <Link to={`/update/` + DataList.Id}>
                      <button type="button" className="btn btn-primary"
                        onClick={() => handleEdit(
                          DataList.Id,
                          DataList.username,
                          DataList.password,
                          DataList.firstName,
                          DataList.lastName,
                          DataList.cardId,
                          DataList.birthDate,
                          DataList.mobileNumber,
                          DataList.email,
                          DataList.height,
                          DataList.weight,
                          DataList.address,
                          DataList.subdistrict,
                          DataList.district,
                          DataList.province,
                          DataList.postcode
                        )}
                      ><i className="fa-solid fa-pen-to-square"></i></button>
                    </Link>

                    <button type="button" className="btn btn-danger mx-1"
                      onClick={() => handleDelete(DataList.Id)}
                    ><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default User;