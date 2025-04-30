"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderFooterSqlite from "../component/global/headerFooterSqlite";
import ImageComponent from "../component/global/imageComponent";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        router.push("/login");
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <HeaderFooterSqlite siteName="Brand Name" footerText="waktu sekarang">
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <ImageComponent
                  imageUrl={user?.image || "/images/uploads/pages/for-hadist.webp"}
                  priority={true}
                  imageAlt={user.userName}
                  width={128}
                  height={128}
                />
              </div>
            </div>

            <h2 className="card-title text-3xl font-bold">Dashboard</h2>
            <p className="text-lg">
              Selamat datang, <strong>{user?.name || user?.email}</strong>!
            </p>

            <div className="mt-2">
              <p className="text-sm text-gray-500">
                <span className="block">
                  Nama: {user?.firstName} {user?.lastName}
                </span>
                <span className="block">Username: @{user?.userName}</span>
              </p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            <div className="mt-6 w-full">
              <button
                className="btn btn-error w-full"
                onClick={async () => {
                  await fetch("/api/user/logout", { method: "POST" });
                  router.push("/login");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </HeaderFooterSqlite>
  );
}
