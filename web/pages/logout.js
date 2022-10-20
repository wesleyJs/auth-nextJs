import { useRouter } from "next/router";
import React from "react";
import { HttpClient } from "../src/infra/HttpClient/HttpClient";
import { tokenService } from "../src/services/auth/tokenService"

export default function LogoutPage() {
  const router = useRouter();

  React.useEffect(() => {
    try {
      HttpClient('/api/refresh', {
        method: 'DELETE'
      });
      tokenService.delete();
      router.push('/')
    } catch(err) {
      alert(err.message)
    }
  })

  
  return (
    <div>
      Você sera deslogado em instantes...
    </div>
  )
}

