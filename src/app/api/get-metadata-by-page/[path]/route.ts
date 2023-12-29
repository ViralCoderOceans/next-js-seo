import { NextResponse } from "next/server";
import { pagesMetadata, defaultMetadata } from "../../constants/constants";

export async function GET(request: Request, context: any) {
  const {
    params: { path },
  } = context;

  return NextResponse.json({ ...defaultMetadata, ...pagesMetadata.filter((elm) => elm.alternates.canonical === "/" + path)[0] });
}
