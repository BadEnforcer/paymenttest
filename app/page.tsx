"use client"

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import instances from "../firebase.js";
import axios from "axios";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();

    try {
      const cred = await signInWithPopup(instances.auth, provider)
      if (cred) {

          const res = await axios.post("https://b53d-2409-40e3-1e-2cae-4919-5d02-cf33-4ef0.ngrok-free.app/order/subscription", {
              "plan_id": "plan_PG7eZQ2mq1U6R7",
              "firebase_uid": cred?.user.uid,
              "total_count": 2,
          })

          router.push(res.data.data.short_url)

        return cred
      } else {
        return null
      }

    } catch (e) {
      console.error("failed to login", e)
    }

  }

  return <button
      onClick={async (e) => {
        e.preventDefault();
        await handleGoogleLogin()


      }}
  >Click to Sign up </button>

}