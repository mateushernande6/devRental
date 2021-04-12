import {Container, TextArea, ErrorMessage} from "./style";

import Input from "../Atoms/Input";
import Button from '../Atoms/Button'

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import api from "../../services";
import {AuthDashboardContext} from "../../Provider/AuthDashboard";
import {MouseEventHandler, useContext, useState} from "react";
import {date} from "yup";


const NewWork = () => {

    const [Techs, setTechs] = useState<string[]>([])
    const [value, setValue] = useState<string>('')

    interface INewWork {
        workTitle: string;
        workDescription: string;
        workTechs: any;
        workDeadline: any;
    }

    const requiredField = 'Campo obrigatório'

    const schema = yup.object().shape({
        workTitle: yup.string().required(requiredField),
        workGoal: yup.string().required(requiredField),
        workDescription: yup.string().required(requiredField).max(500, 'máximo de 500 caracteres'),
        // workTechs: yup.string().required(requiredField),
        workReward: yup.string().required(requiredField),
        workDeadline: yup.string().required(requiredField),


    })

    const {handleSubmit, reset, register, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handleForm = (data: INewWork)=>{
        const postData = {...data, workTechs: Techs}

        console.log(postData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForm)}>

        <Input
            name={'workTitle'}
            register={register}
            width={30}
            height={2.5}
            placeHolder={'Título'}
        />
        <ErrorMessage>{errors.workTitle?.message}</ErrorMessage>

                {/*//    titulo, objetivo, descrição, tecnologias, recompensa, prazo*/}
        <TextArea
        {...register('workGoal')}
        placeholder='Objetivo'
        rows={5}
        />
        <ErrorMessage>{errors.workDescription?.message}</ErrorMessage>

       <TextArea
       {...register('workDescription')}
       placeholder='Descrição'
        rows={10}
       />
       <ErrorMessage>{errors.workDescription?.message}</ErrorMessage>

        {/*<Input*/}
        {/*    name={'workTechs'}*/}
        {/*    register={register}*/}
        {/*    width={30}*/}
        {/*    height={2.5}*/}
        {/*    placeHolder={'Techs'}*/}
        {/*/>*/}

        {Techs.map((item, index) => <ErrorMessage>{item}</ErrorMessage>)}

        <input placeholder={'New tech'}
            onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={(e)=> {
            setTechs([...Techs, value]);
            e.preventDefault()

        }}>add tech</button>
        <ErrorMessage>{errors.workTechs?.message}</ErrorMessage>

        <Input
            name={'workReward'}
            register={register}
            width={30}
            height={2.5}
            placeHolder={'Recompensa'}
        />
        <ErrorMessage>{errors.workDescription?.message}</ErrorMessage>


                <Input
            name={'workDeadline'}
            register={register}
            width={30}
            height={2.5}
            placeHolder={'Prazo'}
        />
        <ErrorMessage>{errors.workDeadline?.message}</ErrorMessage>

        <Button
            height={4.7}
            width={26}
            color={"#fff"}
            text={"Adicionar"}
            background={"#fc923f"}
            // type={'submit'}
        />

            </form>
        </div>
    );
};

export default NewWork;