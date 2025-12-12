import prisma from "@/app/lib/prisma";
import Link from "next/link";
import {FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { PiGear } from "react-icons/pi";

export const dynamic = "force-dynamic";

export default async function ListThemePage() {
  const themes = await prisma.landingPage.findMany({
    include: {
      theme: true,
      ctas: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">List Themes</h1>
        <Link href="/addtheme" className="btn btn-primary">
          Add New Theme
        </Link>
      </div>

      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Theme</th>
                <th>CTA</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {themes.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No themes found.
                  </td>
                </tr>
              )}
              {themes.map((item) => (
                <tr key={item.id} className="hover">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="w-full h-full bg-base-300 flex items-center justify-center text-xs">
                            No Img
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.slug}</div>
                  </td>
                  <td>
                    {item.theme?.name || <span className="text-xs text-gray-400">-</span>}
                  </td>
                  <td>
                    {item.ctas && item.ctas.length > 0 ? (
                      <span className="badge badge-ghost badge-sm">
                        {item.ctas[0].description} 
                        {item.ctas.length > 1 && ` +${item.ctas.length - 1}`}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                  </td>
                  <td>
                    {item.isActive ? (
                      <div className="badge badge-success gap-2 text-white">
                        <FaCheckCircle className="text-xs" /> Active
                      </div>
                    ) : (
                      <div className="badge badge-ghost gap-2">
                        <FaTimesCircle className="text-xs" /> Inactive
                      </div>
                    )}
                  </td>
                  <td>
                    <Link
                      href={`/edittheme/${item.id}`}
                      className="btn btn-sm btn-square btn-ghost"
                      title="Edit"
                    >
                      <PiGear size={24} />
                    </Link>
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
