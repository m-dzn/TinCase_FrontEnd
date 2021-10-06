import React from "react";
import { Input } from "components";
import { PostCode } from "components/user/PostCode/index";

export function ProfileEditor({ userInfo, onChange }) {
  const { nickname, address, addressDetail } = userInfo;

  return (
    <>
      <Input
        name="nickname"
        value={nickname}
        placeholder="닉네임"
        onChange={onChange}
      />
      <PostCode
        address={address}
        addressDetail={addressDetail}
        onChange={onChange}
      />
    </>
  );
}

ProfileEditor.propTypes = {};
