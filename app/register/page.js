'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !username.trim() ||
      !password.trim() ||
      !prefix ||
      !firstName.trim() ||
      !lastName.trim() ||
      !gender ||
      !birthDate ||
      !acceptedTerms
    ) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วนและยอมรับเงื่อนไข');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        `สมัครสมาชิกสำเร็จ!\n` +
        `ชื่อผู้ใช้: ${username}\n` +
        `คำนำหน้า: ${prefix}\n` +
        `ชื่อ: ${firstName}\n` +
        `นามสกุล: ${lastName}\n` +
        `ที่อยู่: ${address}\n` +
        `เพศ: ${gender}\n` +
        `วันเกิด: ${birthDate}\n` +
        `ยอมรับเงื่อนไข: ใช่`
      );

      setUsername('');
      setPassword('');
      setPrefix('');
      setFirstName('');
      setLastName('');
      setAddress('');
      setGender('');
      setBirthDate('');
      setAcceptedTerms(false);
      setIsSubmitting(false);
    }, 800);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    marginBottom: 8,
    border: '1.5px solid #ccc',
    borderRadius: 8,
    fontSize: 16,
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#0d6efd',
    outline: 'none',
    boxShadow: '0 0 8px rgba(13, 110, 253, 0.5)',
  };

  const labelStyle = {
    fontWeight: '600',
    display: 'block',
    marginBottom: 6,
  };

  const buttonStyle = {
    width: '100%',
    padding: 14,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: 12,
    cursor: isSubmitting ? 'wait' : 'pointer',
    boxShadow: '0 6px 12px rgba(13, 110, 253, 0.4)',
  };

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background: url('https://your-image-url.com/shoe-store.jpg') no-repeat center center fixed;
            background-size: cover;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
        `}
      </style>

      <main
        style={{
          maxWidth: 500,
          margin: '3rem auto',
          padding: '2.5rem 3rem',
          borderRadius: 16,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
          color: '#333',
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#0d6efd', marginBottom: 24 }}>
          สมัครสมาชิก
        </h1>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            placeholder="กรอกชื่อผู้ใช้"
            disabled={isSubmitting}
          />

          <label style={labelStyle}>รหัสผ่าน</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            placeholder="กรอกรหัสผ่าน"
            disabled={isSubmitting}
          />

          <label style={labelStyle}>คำนำหน้า</label>
          <select
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            style={{ ...inputStyle, backgroundColor: '#fff', cursor: 'pointer' }}
            disabled={isSubmitting}
          >
            <option value="">-- กรุณาเลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          <label style={labelStyle}>ชื่อ</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={inputStyle}
            placeholder="กรอกชื่อ"
            disabled={isSubmitting}
          />

          <label style={labelStyle}>นามสกุล</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputStyle}
            placeholder="กรอกนามสกุล"
            disabled={isSubmitting}
          />

          <label style={labelStyle}>ที่อยู่</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ ...inputStyle, minHeight: 60 }}
            placeholder="กรอกที่อยู่ (ถ้ามี)"
            disabled={isSubmitting}
          />

          <label style={labelStyle}>เพศ</label>
          <label>
            <input
              type="radio"
              value="ชาย"
              checked={gender === 'ชาย'}
              onChange={(e) => setGender(e.target.value)}
              disabled={isSubmitting}
            />{' '}
            ชาย
          </label>
          {' '}
          <label>
            <input
              type="radio"
              value="หญิง"
              checked={gender === 'หญิง'}
              onChange={(e) => setGender(e.target.value)}
              disabled={isSubmitting}
            />{' '}
            หญิง
          </label>

          <br />
          <label style={labelStyle}>วันเกิด</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={inputStyle}
            disabled={isSubmitting}
          />

          <label style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              disabled={isSubmitting}
            />
            <span style={{ marginLeft: 10 }}>ยอมรับเงื่อนไข</span>
          </label>

          <button type="submit" style={buttonStyle} disabled={isSubmitting}>
            {isSubmitting ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
          </button>
        </form>
      </main>
    </>
  );
}
