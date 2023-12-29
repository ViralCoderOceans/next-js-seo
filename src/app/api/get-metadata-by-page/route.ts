import { NextResponse } from "next/server";
import SiteConfig from "@/siteConfig";
import { defaultMetadata } from "../constants/constants"

export async function GET(request: Request) {
  return NextResponse.json({ ...defaultMetadata });
}
