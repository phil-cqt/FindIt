import crypto from "crypto";

export const getGravatarUrl = (email) => {
  const hash = crypto
    .createHash("md5")
    .update(email.toLowerCase().trim())
    .digest("hex");
  const url = `https://gravatar.com/avatar/${hash}`;
  return url;
};
