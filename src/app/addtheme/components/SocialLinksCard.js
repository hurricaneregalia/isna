"use client";

import { FaLink, FaPlus, FaTrash } from "react-icons/fa";

export default function SocialLinksCard({
  socialLinks,
  handleSocialChange,
  addSocialLink,
  removeSocialLink,
}) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title flex items-center gap-2 text-pink-500">
            <FaLink /> Social Links
          </h2>
          <button
            type="button"
            className="btn btn-sm btn-outline btn-primary gap-2"
            onClick={addSocialLink}
          >
            <FaPlus /> Add New
          </button>
        </div>
        <div className="divider my-0"></div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Platform</th>
                <th>URL</th>
                <th>Username</th>
                <th className="w-16">Action</th>
              </tr>
            </thead>
            <tbody>
              {socialLinks.map((link, index) => (
                <tr key={index} className="hover">
                  <td>
                    <select
                      id={`social-platform-${index}`}
                      name={`social-platform-${index}`}
                      className="select select-bordered select-sm w-full max-w-xs"
                      value={link.platform}
                      onChange={(e) =>
                        handleSocialChange(index, "platform", e.target.value)
                      }
                      autoComplete="off"
                    >
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Twitter</option>
                      <option>TikTok</option>
                      <option>LinkedIn</option>
                      <option>Youtube</option>
                      <option>Website</option>
                    </select>
                  </td>
                  <td>
                    <input
                      id={`social-url-${index}`}
                      name={`social-url-${index}`}
                      type="text"
                      placeholder="https://..."
                      className="input input-bordered input-sm w-full"
                      value={link.url}
                      onChange={(e) =>
                        handleSocialChange(index, "url", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </td>
                  <td>
                    <input
                      id={`social-username-${index}`}
                      name={`social-username-${index}`}
                      type="text"
                      placeholder="@username"
                      className="input input-bordered input-sm w-full"
                      value={link.platformUsername}
                      onChange={(e) =>
                        handleSocialChange(index, "platformUsername", e.target.value)
                      }
                      autoComplete="off"
                    />
                  </td>
                  <td>
                    {socialLinks.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-xs text-error tooltip"
                        data-tip="Remove"
                        onClick={() => removeSocialLink(index)}
                      >
                        <FaTrash />
                      </button>
                    )}
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
