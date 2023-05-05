import { supabase } from "@/server";

type FileBody =
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Buffer
  | File
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | URLSearchParams
  | string;

/**
 * Uploads a file to an existing bucket.
 *
 * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
 * @param fileBody The body of the file to be stored in the bucket.
 */
export const insertImage = async ({
  path,
  fileBody,
}: {
  path: string;
  fileBody: FileBody;
}) => {
  const { error } = await supabase.storage.from("image").upload(path, fileBody);

  return error;
};
