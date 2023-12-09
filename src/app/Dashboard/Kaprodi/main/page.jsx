"use client"
import Navbar from "@/app/components/Navbar";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { MdHome } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

function DashboardKaprodi() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Update setiap detik

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // Opsi untuk menampilkan tanggal, bulan, dan tahun
    const dateFormatOptions = {
        year: "numeric",
        month: "short", // atau "short" untuk singkatan bulan
        day: "numeric",
    };

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="bg-[#E7ECEF] h-[200vh] flex gap-6" data-theme="light">
            <Navbar />

            {/* SIDEBAR */}
            <div className="w-[23vw] relative z-10 flex flex-col gap-3 border-black py-[7em] h-screen">
                <a
                    href="dashboardmahasiswa"
                    className="w-full flex hover:cursor-pointer justify-center items-center gap-2 bg-[#001247] text-white py-3 rounded-r-xl"
                >
                    <MdHome className="text-xl" />
                    <h1 className="font-bold text-xl">Dashboard</h1>
                </a>
                <a
                    href="dashboardmahasiswa/inputfile"
                    className="w-full flex hover:cursor-pointer justify-center items-center gap-2 bg-[#ffff] text-black py-2 rounded-r-xl"
                >
                    <LuFileInput className="text-xl" />
                    <h1 className="font-bold text-xl">Input File</h1>
                </a>
            </div>
            {/* ------- SIDEBAR --------- */}

            {/* CENTER */}
            <div className="w-[54vw] pt-[7em] flex flex-col gap-4">
                <div className="flex w-full justify-between">
                    <div className="h-10 flex items-center">
                        <h1 className="font-bold text-xl text-black">
                            Welcome! Taufik Nur Adi
                        </h1>
                    </div>
                    <div className="flex bg-white rounded-lg gap-2 h-10 items-center p-3">
                        <FaCalendarAlt />
                        <h1 className="font-bold text-xl text-black">
                            {currentDate.toLocaleDateString(
                                "id-ID",
                                dateFormatOptions
                            )}
                        </h1>
                    </div>
                </div>
                {/* TIMELINE */}
                <div className="bg-white w-full h-[190px] rounded-xl p-4">
                    <h1 className="text-xl font-bold">Keseluruhan</h1>
                    
                </div>
                {/* TIMELINE */}

                {/* Presentase */}
                <div className="flex w-full gap-4 h-[190px]">
                    <div className="w-1/2 h-full bg-white rounded-xl p-3">
                        <h1 className="text-xl font-bold text-black mb-4">
                            Presentase Untuk Cumlaude
                        </h1>
                        <div className="w-full flex justify-center items-center gap-4">
                            <div
                                className="radial-progress text-primary"
                                style={{ "--value": 80, "--size": "8rem" }}
                                role="progressbar"
                            >
                                80%
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-2 items-center">
                                    <div className="h-5 w-5 bg-primary"></div>
                                    <h1 className="text-black">Memenuhi</h1>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="h-5 w-5 bg-current"></div>
                                    <h1 className="text-black">
                                        Tidak Memenuhi
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full bg-white rounded-xl p-3">
                        <h1 className="text-xl font-bold text-black mb-4">
                            Bimbingan Terpenuhi
                        </h1>
                        <center>
                            <div className="w-full flex justify-center items-center gap-4">
                                <div
                                    className="radial-progress text-primary"
                                    style={{
                                        "--value": 37.5,
                                        "--size": "8rem",
                                    }}
                                    role="progressbar"
                                >
                                    37.5%
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <div className="h-5 w-5 bg-primary"></div>
                                        <h1 className="text-black">Memenuhi</h1>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="h-5 w-5 bg-current"></div>
                                        <h1 className="text-black">
                                            Tidak Memenuhi
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                {/* presentase */}

                {/* TABLE */}
                <div
                    className="overflow-x-auto bg-white rounded-xl"
                    data-theme="light"
                >
                    <h1 className="font-bold text-xl ml-4 mt-4">
                        Recent Activities
                    </h1>
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center text-black font-extrabold">
                                <th>No</th>
                                <th>Berkas</th>
                                <th>Keperluan</th>
                                <th>Date</th>
                                <th>Keterangan</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                const rows = [];
                                for (let i = 1; i < 6; i++) {
                                    rows.push(
                                        <tr key={i} className="text-center">
                                            <th>{i}</th>
                                            <td>Brice Swyre</td>
                                            <td>Tax Accountant</td>
                                            <td>Red</td>
                                            <td>Red</td>
                                            <td>
                                                <button className="bg-[#EBF9F1] text-[#1F9254] px-3 py-1 rounded-xl">
                                                    Delivered
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }
                                return rows;
                            })()}
                        </tbody>
                    </table>
                </div>
                {/* TABLE */}
            </div>
            {/* CENTER */}

            {/* LEFTSIDE */}
            <div className="w-[23vw] bg-white h-[50vh] mt-[7em] mr-4 rounded-xl p-4">
                <div className="flex gap-2 items-center">
                    <IoMdNotifications className="text-2xl" />
                    <h1 className="font-bold text-xl">Task</h1>
                </div>
                <div className="mt-2">
                    <p>Apa aja?</p>
                    <p>Apa aja?</p>
                    <p>Apa aja?</p>
                    <p>Apa aja?</p>
                    <p>Apa aja?</p>
                </div>
            </div>
            {/* LEFTSIDE */}
        </div>
    );
}

export default DashboardKaprodi;
