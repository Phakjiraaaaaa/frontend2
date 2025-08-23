"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sriracha } from "next/font/google";


const sriracha = Sriracha({ subsets: ["latin"], weight: "400" });

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    async function getUsers() {
      try {
        const res = await fetch(
          "https://backend-nextjs-virid.vercel.app/api/users"
        );
        if (!res.ok) {
          console.error("Failed to fetch data");
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "คุณแน่ใจไหม?",
      text: "คุณไม่สามารถกู้คืนข้อมูลนี้ได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "ใช่!",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://backend-nextjs-virid.vercel.app/api/users/${id}`,
          {
            method: "DELETE",
            headers: { Accept: "application/json" },
          }
        );
        if (!res.ok) throw new Error("Delete failed");
        await res.json();

        Swal.fire({
          title: "ลบแล้ว!",
          text: "ข้อมูลถูกลบเรียบร้อย",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      } catch (error) {
        console.error("Error deleting:", error);

        Swal.fire({
          title: "เกิดข้อผิดพลาด!",
          text: "ไม่สามารถลบข้อมูลได้",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      }
    }
  };

  return (
    <div
      className={sriracha.className} 
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: 'url("/images/silders/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 12,
          padding: 20,
          maxWidth: 900,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          overflowX: "auto",
        }}
      >
        <div className="card">
          <div className="card-body">
            {loading ? (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "#0d6efd",
                }}
              >
                Loading...
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 15 }}>
                  <strong>จำนวนผู้ใช้ทั้งหมด: {items.length} คน</strong>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Firstname</th>
                          <th>Fullname</th>
                          <th>Lastname</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td className="text-center">{item.id}</td>
                            <td>{item.firstname}</td>
                            <td>{item.fullname}</td>
                            <td>{item.lastname}</td>
                            <td>
                              <Link
                                href={`/admin/users/edit/${item.id}`}
                                className="btn btn-warning btn-sm"
                              >
                                <i className="fa fa-pencil-alt"></i> Edit
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(item.id)}
                              >
                                <i className="fa fa-trash"></i> Del
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
