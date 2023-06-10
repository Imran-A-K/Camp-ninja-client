import { useRef, useState } from "react";
import useAuthentication from "../../../hooks/useAuthentication";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
const img_hosting_token= import.meta.env.VITE_Image_Upload_Token

const AddClass = () => {
  const { user } = useAuthentication();
  const image_hosting_url= `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

//   const [imageName, setImageName] = useState("");
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setImageName(file.name);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     setImageName(file.name);
//   };
//   const handleUploadClick = () => {
//     if (fileInputRef.current) {
//         fileInputRef.current.click();
//       }
//   };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    const instructorName = user?.displayName;
    const instructorEmail = user?.email;
    const feedback = "";
    const enrolled = 0;
    const price = parseFloat(data.price);
    const availableSeats = parseInt(data.availableSeats);
    const status = "pending"
    const newClass = { instructorName, instructorEmail, className: data.className, price, feedback, enrolled, availableSeats,status}
    console.log(newClass)
    console.log(data);

  };
//   console.log(errors);
  return (
    <div className="mb-10">
      <section className="max-w-4xl px-6 pb-9 mx-auto bg-blue-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl pt-6 font-bold text-white capitalize dark:text-white">
          Fill the class details
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username"
              >
                Instructor name
              </label>
              <input
                id="username"
                // name="instructorName"
                type="text"
                value={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                // {...register("instructorName", { required: true })}
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                // name="instructorEmail"
                type="email"
                value={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                // {...register("instructorEmail", { required: true })}
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="password"
              >
                Name of the Class
              </label>
              <input
                id="password"
                type="text"
                name="className"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("className", { required: true })}
              />
              {errors.className?.type === "required" && (
                <p
                  className="pl-1 pt-2 flex items-center bg-white rounded-lg mt-2 gap-2 text-base text-red-500"
                  role="alert"
                >
                  <BiError /> Please Enter the Class Name
                </p>
              )}
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Price
              </label>
              <input
                id="passwordConfirmation"
                type="text"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("price", {
                  required: "Price is required",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message:
                      "Do not include strings and not more than two decimals",
                  },
                })}
              />
              {errors.price && (
                <p
                  className="pl-1 pt-2 flex items-center gap-2 text-base bg-white rounded-lg mt-2 text-red-500"
                  role="alert"
                >
                  <BiError /> {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Total Seats
              </label>
              <input
                id="textarea"
                type="text"
                name="availableSeats"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                {...register("availableSeats", {
                  required: "Enter the available seats.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message:
                      "Seats field should contain numbers only and no decimal points or spaces.",
                  },
                  validate: (value) =>
                    !isNaN(value) ||
                    "Seats field should contain numbers only and no decimal points or spaces.",
                })}
              />
              {errors.availableSeats && (
                <p
                  className="pl-1 pt-2 flex items-center gap-2 bg-white rounded-lg mt-2 text-base text-red-500"
                  role="alert"
                >
                  <BiError /> {errors.availableSeats.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Class Image
              </label>
              <div className="form-control w-full max-w-xs">
  
  <input type="file" className="file-input  file-input-primary block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
  {...register('classImage', {
    required: 'Image is required',
    validate: {
      acceptedFormats: (file) => {
        const acceptedFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
        return acceptedFormats.includes(file[0]?.type) || 'Invalid file format';
      },
    },
  })}
  />
  {errors.classImage && <p
                    className="pl-1 pt-2 flex items-center gap-2 bg-white rounded-lg mt-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> {errors.classImage.message}
                  </p>
                   }
  
</div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddClass;

{
  /* <div>
      <label className="block text-sm font-medium text-white">Image of the Class Sport</label>
      <div
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-white"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
            //   onClick={handleUploadClick}
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span className="p-4">Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                {...register('image', {
                    required: 'Image is required',
                    validate: {
                      acceptedFormats: (file) => {
                        const acceptedFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
                        return acceptedFormats.includes(file[0]?.type) || 'Invalid file format';
                      },
                    },
                  })}
              />
            </label>
            <p className="pl-1 text-white">or drag and drop</p>
          </div>
          <p className="text-xs text-white">PNG, JPG, JPEG or GIF</p>
          {imageName && (
            <p className="text-xs text-white">Uploaded file: {imageName}</p>
          )}
          {errors.image && <p
                    className="pl-1 pt-2 flex items-center gap-2 bg-white rounded-lg mt-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> {errors.image.message}
                  </p>
                   }
        </div>
      </div>
    </div> */
}
{/* <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div
                className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
              >
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <span
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 p-2"
                      onClick={handleUploadClick}
                    >
                      Upload a file
                    </span>
                    <input
                      ref={fileInputRef}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      {...register('classImage', {
                        required: 'Image is required',
                        validate: {
                          acceptedFormats: (file) => {
                            const acceptedFormats = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
                            return acceptedFormats.includes(file[0]?.type) || 'Invalid file format';
                          },
                        },
                      })}
                    />
                    
                    <p className="pl-1 pt-2 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, JPEG or GIF</p>
                  {imageName && (
                    <p className="text-xs text-white">
                      Uploaded file: {imageName}
                    </p>
                  )}
                  {errors.classImage && (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 bg-white rounded-lg mt-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors.classImage.message}
                    </p>
                  )}
                </div>
              </div>
            </div> */}