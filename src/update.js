import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataList from './data.json';
import Locations from './province.json';
import './update.css';

function Update() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardId, setCardId] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');
  const [subdistrict, setSubdistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postcode, setPostcode] = useState('');

  const currentDate = new Date().toISOString().split('T')[0];
  let history = useNavigate();

  const { Id } = useParams();

  const index = DataList.findIndex(item => item.Id == Id);

  const handleSubmit = (e) => {
    e.preventDefault();
    DataList[index].username = username;
    DataList[index].password = password;
    DataList[index].firstName = firstName;
    DataList[index].lastName = lastName;
    DataList[index].cardId = cardId;
    DataList[index].birthDate = birthDate;
    DataList[index].mobileNumber = mobileNumber;
    DataList[index].email = email;
    DataList[index].height = height;
    DataList[index].weight = weight;
    DataList[index].address = address;
    DataList[index].subdistrict = subdistrict;
    DataList[index].district = district;
    DataList[index].province = province;
    DataList[index].postcode = postcode;
    history("/")
  };

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
    setPassword(localStorage.getItem('password'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setCardId(localStorage.getItem('cardId'))
    setBirthDate(localStorage.getItem('birthDate'))
    setMobileNumber(localStorage.getItem('mobileNumber'))
    setEmail(localStorage.getItem('email'))
    setHeight(localStorage.getItem('height'))
    setWeight(localStorage.getItem('weight'))
    setAddress(localStorage.getItem('address'))
    setSubdistrict(localStorage.getItem('subdistrict'))
    setDistrict(localStorage.getItem('district'))
    setProvince(localStorage.getItem('province'))
    setPostcode(localStorage.getItem('postcode'))
  }, [])

  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorVerifyPassword, setErrorVerifyPassword] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorCardId, setErrorCardId] = useState('');
  const [errorMobileNumber, setErrorMobileNumber] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorHeight, setErrorHeight] = useState('');
  const [errorWeight, setErrorWeight] = useState('');
  const [errorpostcode, setErrorPostcode] = useState('');

  const validForm = (e) => {
    e.preventDefault()
    let valid = true;

    const englishLetter = /^[a-z]+$/;
    const numberLetter = /^[0-9]+$/;

    //username eng letter only
    if (username.match(englishLetter)) {
      setErrorUsername('');
    } else {
      setErrorUsername('please enter only english letter');
      valid = false;
    }

    // password eng num >8 uppercase atleast 1 && have textfield for verify password
    if (password.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setErrorPassword('');
    } else {
      setErrorPassword('Invalid Password: Only letters(a-z), number(0-9), ');
      valid = false;
    }

    //textfield for Verify Password matches the original Password
    if (verifyPassword === password) {
      setErrorVerifyPassword('');
    } else {
      setErrorVerifyPassword('Passwords do not match');
      valid = false;
    }

    // firstName only that and eng
    if (firstName.match(/^[a-zA-Z\s]*$|^[\u0E00-\u0E7F\s]*$/) && firstName !== '') {
      setErrorFirstName('');
    } else {
      setErrorFirstName('Invalid Firstname: Please enter english-thai letter');
      valid = false;
    }

    // lastName only that and eng
    if (lastName.match(/^[a-zA-Z\s]*$|^[\u0E00-\u0E7F\s]*$/) && lastName !== '') {
      setErrorLastName('');
    } else {
      setErrorLastName('Invalid Lastname: Please enter english-thai letter');
      valid = false;
    }

    // cardId 13 digit
    if ((cardId.length === 13 && cardId.match(numberLetter)) || cardId === '') {
      setErrorCardId('')
    } else {
      setErrorCardId('Invalid Id card: Please enter only 13 number')
      valid = false;
    }

    // birthDate valid must put
    // if (!birthDate) {
    //   setErrorBirthDate('Please select a Birth Date');
    // }

    // mobileNumber 10 digit
    if ((mobileNumber.length === 10 && mobileNumber.match(numberLetter)) || mobileNumber === '') {
      setErrorMobileNumber('')
    } else {
      setErrorMobileNumber('Invalid Mobile Number: Please enter only 10 number')
      valid = false;
    }

    // email email format
    if ((email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) || email === '') {
      setErrorEmail('')
    } else {
      setErrorEmail('Invalid Email')
      valid = false;
    }

    // height only num
    if ((height.match(numberLetter) && height >= 60 && height <= 200) || height === '') {
      setErrorHeight('')
    } else {
      setErrorHeight('Invalid Height: Please enter only number (60-200 cm.)')
      valid = false;
    }

    // weight only num
    if ((weight.match(numberLetter) && weight >= 30 && weight <= 200) || weight === '') {
      setErrorWeight('')
    } else {
      setErrorWeight('Invalid Weight: Please enter only number (30-200 kg.)')
      valid = false;
    }

    // subdistrict: 'ในเมือง', 
    // district: 'เมือง',
    // province: 'ขอนแก่น',
    // if (!province) {
    //   setErrorProvince('Please select a province');
    // }
    // if (!district) {
    //   setErrorDistrict('Please select a district');
    // }
    // if (!subdistrict) {
    //   setErrorSubdistrict('Please select a subdistrict');
    // }

    // postcode: รับเฉพาะตัวเลย 5 หลักตามสากล
    if ((postcode.match(numberLetter) && postcode.length === 5) || postcode === '') {
      setErrorPostcode('')
    } else {
      setErrorPostcode('Invalid Postcode')
      valid = false;
    }

    if (valid) {
      handleSubmit(e);
    }
  }

  //give help from chatgpt gen code of unique option when province change (new)
  const provinces = [...new Set(Locations.map(item => item.province))];

  const districts = [...new Set(Locations
    .filter(item => item.province === province)
    .map(item => item.district)
  )];

  const subdistricts = [...new Set(Locations
    .filter(item => item.province === province && item.district === district)
    .map(item => item.subdistrict)
  )];

  //give help from chatgpt gen code of unique option when province change (old)
  const [districtOptions, setDistrictOptions] = useState([]);
  const [subdistrictOptions, setSubdistrictOptions] = useState([]);

  const handleProvinceChange = (selectedProvince) => {
    setProvince(selectedProvince);
    const uniqueDistricts = [...new Set(Locations
      .filter(location => location.province === selectedProvince)
      .map(location => location.district))];
    setDistrictOptions(uniqueDistricts);
    setDistrict('');
    setSubdistrict('');
  };

  //give help from chatgpt gen code of unique option when district change
  const handleDistrictChange = (selectedDistrict) => {
    setDistrict(selectedDistrict);
    const uniqueSubdistricts = [...new Set(Locations
      .filter(location => location.province === province && location.district === selectedDistrict)
      .map(location => location.subdistrict))];
    setSubdistrictOptions(uniqueSubdistricts);
    setSubdistrict('');
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleVerifyPasswordVisibility = () => {
    setShowVerifyPassword(!showVerifyPassword);
  };

  return (
    <div className='container mt-4' >
      <div className='row'>
        <div className="col px-5">
          <form className='form'>
            <div className="form-floating">
              <input className="form-control" required
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
              <label>Username*</label>
              <small>{errorUsername}</small>
            </div>
            <div className='row'>
              <div className="form-floating col-5">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label className=' mx-3'>Password*</label>
                <small>{errorPassword}</small>
              </div>
              <div
                className="toggle-password col-1"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-solid fa-eye"></i>}
              </div>
              <div className="form-floating col-5">
                <input
                  type={showVerifyPassword ? 'text' : 'Password'}
                  className="form-control"
                  placeholder="Verify Password"
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)} />
                <label className=' mx-3'>Verify Password*</label>
                <small>{errorVerifyPassword}</small>
              </div>
              <div
                className="toggle-password col-1"
                onClick={toggleVerifyPasswordVisibility}
              >
                {showVerifyPassword ? <i className="fa-regular fa-eye"></i> : <i className="fa-solid fa-eye"></i>}
              </div>
            </div>
            <div className='row'>
              <div className="form-floating col">
                <input className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} />
                <label className=' mx-3'>FirstName*</label>
                <small>{errorFirstName}</small>
              </div>
              <div className="form-floating col">
                <input className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />
                <label className=' mx-3'>LastName*</label>
                <small>{errorLastName}</small>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating col">
                <input className="form-control"
                  value={cardId}
                  onChange={(e) => setCardId(e.target.value)} />
                <label className=' mx-3'>Id Card</label>
                <small>{errorCardId}</small>
              </div>
              <div className="form-floating col">
                <input type="date"
                  className="form-control"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={currentDate} />
                <label className='mx-3'>Birth Date</label>
                {/* <small>{errorBirthDate}</small> */}
              </div>
            </div>
            <div className='row'>
              <div className="form-floating col">
                <input type="tel" className="form-control"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)} />
                <label className='mx-3'>Mobile Number</label>
                <small>{errorMobileNumber}</small>
              </div>

              <div className="form-floating col">
                <input type="email" className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label className='mx-3'>Email</label>
                <small>{errorEmail}</small>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating col">
                <input className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)} />
                <label className='mx-3'>Height</label>
                <small>{errorHeight}</small>
              </div>
              <div className="form-floating col">
                <input className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)} />
                <label className='mx-3'>Weight</label>
                <small>{errorWeight}</small>
              </div>
            </div>
            <div className="form-floating">
              <input className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
              <label>Address</label>
              <small></small>
            </div>
            <div className='row'>
              <div className="form-floating col">
                {/* make district have only in province */}
                <select
                  className="form-select"
                  value={province}
                  onChange={(e) => handleProvinceChange(e.target.value)}>
                  {/* <option value="">Select Province</option>
                  {Array.from(new Set(Locations.map(location => location.province))).map((provinceOptions, index) => (
                    <option key={index} value={provinceOptions}>
                      {provinceOptions}
                    </option>
                  ))} */}
                  <option value="">Select Province</option>
                  {provinces.map((province, index) => (
                    <option key={index} value={province}>{province}</option>
                  ))}
                </select>
                <label className='mx-3'>Province</label>
                {/* <small>{errorProvince}</small> */}
              </div>
              <div className="form-floating col">
                {/* make subdistrict have only in district */}
                <select
                  className="form-select"
                  value={district}
                  onChange={(e) => handleDistrictChange(e.target.value)}>
                  {/* <option value="">Select District</option>
                  {districtOptions.map((uniqueDistrict, index) => (
                    <option key={index} value={uniqueDistrict}>
                      {uniqueDistrict}
                    </option>
                  ))} */}
                  <option value="">Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
                <label className='mx-3'>District</label>
                <small></small>
              </div>
            </div>
            <div className='row'>
              <div className="form-floating col">
                {/* subdistrict options based on selected district */}
                <select
                  className="form-select"
                  value={subdistrict}
                  onChange={(e) => setSubdistrict(e.target.value)}>
                  {/* <option value="">Select Subdistrict</option>
                  {subdistrictOptions.map((uniqueSubdistrict, index) => (
                    <option key={index} value={uniqueSubdistrict}>
                      {uniqueSubdistrict}
                    </option>
                  ))} */}
                  <option value="">Select Subdistrict</option>
                  {subdistricts.map((subdistrict, index) => (
                    <option key={index} value={subdistrict}>{subdistrict}</option>
                  ))}
                </select>
                <label className='mx-3'>Subdistrict</label>
                {/* <small>{errorSubdistrict}</small> */}
              </div>
              <div className="form-floating col">
                <input className="form-control"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)} />
                <label className='mx-3'>Postcode</label>
                <small>{errorpostcode}</small>
              </div>
            </div>
            <div className='d-grid'>
              <button type="submit" className="btn btn-success p-3 mt-2"
                onClick={validForm}>
                Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
