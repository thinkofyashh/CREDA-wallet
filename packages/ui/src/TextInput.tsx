type TextInputProps={
    placeholder: string;
    label:string,
    onChange:(value:string)=>void
}


export const TextInput=({placeholder,label,onChange}:TextInputProps)=>{
    return <div className="pt-2">
        <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange ={(e)=>{
            onChange(e.target.value)
        }} placeholder={placeholder} type="text"></input>
        
    </div>
}