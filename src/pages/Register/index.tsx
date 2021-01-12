import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import {FiArrowLeft} from 'react-icons/fi'
import { validate } from 'gerador-validador-cpf';
import { Link } from 'react-router-dom';

import { Container} from './styles'; 
import axios from 'axios';

const Home = () => {
    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [dataNas, setDataNasc] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cpf, setCpf] = useState('');
    const [uf, setUf] = useState('');

    const [nomeCookie, setNomeCookie] = useCookies(["nome"]);
    const [dataNasCookie, setdataNasCookie] = useCookies(["dataNasc"]);
    const [enderecoCookie, setEnderecoCookie] = useCookies(["endereco"]);
    const [bairroCookie, setBairroCookie] = useCookies(["bairro"]);
    const [cidadeCookie, setCidadeCookie] = useCookies(["cidade"]);
    const [ufCookie, setUfCookie] = useCookies(["uf"]);
    const [cpfCookie, setCpfCookie] = useCookies(["cpf"]);
    const [cepCookie, setCepCookie] = useCookies(["cpf"]);

    interface cepResponse {
        data: {
            bairro: string;
            localidade: string;
            uf: string;
            logradouro: string;
        }
    }

    const handleLoadEndereco = useCallback(
        async (cep: string) => {
        
            const response:cepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            console.log(response.data)
            setCep(cep);
            setEndereco(response.data.logradouro);
            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setUf(response.data.uf);
        },
        [],
    );

    const handleSignUp = useCallback(
        async () => {
            const isValid = validate(cpf);

            console.log(nome, dataNas, cep, endereco, bairro, cidade, uf);

            if (isValid) {
                if (nome === '' || dataNas === '' || cep === '' || endereco === '' || bairro === '' || cidade === '' || uf === '') {
                    alert('Preencha todos os campos')
                } else {
                    localStorage.setItem('nome', nome);
                    localStorage.setItem('dataNasc', dataNas);
                    localStorage.setItem('cpf', cpf);
                    localStorage.setItem('endereco', endereco);
                    localStorage.setItem('bairro', bairro);
                    localStorage.setItem('cidade', cidade);
                    localStorage.setItem('uf', uf);
        
                    setNomeCookie("nome", `${nome}`, {
                        path: "/"
                      });
        
                    setBairroCookie("bairo", `${bairro}`, {
                    path: "/"
                    });
        
                    setdataNasCookie("dataNasc", `${dataNas}`, {
                        path: "/"
                    });
        
                    setCpfCookie("cpf", `${cpf}`, {
                        path: "/"
                    });
        
                    setCepCookie("cep", `${cep}`, {
                        path: "/"
                    });
        
                    setEnderecoCookie("endereco", `${endereco}`, {
                        path: "/"
                    });
        
                    setCidadeCookie("cidade", `${cidade}`, {
                        path: "/"
                    });
        
                    setUfCookie("uf", `${uf}`, {
                        path: "/"
                    });

                    alert('Dados salvos com sucesso!')
                }
            } else {
                alert('CPF Inválido');
            }


        },
        [bairro, cep, cidade, cpf, dataNas, endereco, nome, setBairroCookie, setCepCookie, setCidadeCookie, setCpfCookie, setEnderecoCookie, setNomeCookie, setUfCookie, setdataNasCookie, uf],
    );

      

    return(
        <Container>   
                <div className="section1Content">

                    
                    <div className="titleContent">
                        <Link to="/">
                            <FiArrowLeft size={30}/>
                        </Link>
                        <h1>Cadastro</h1>
                    </div>
                    <div className="campos">
                        <input type="text" placeholder="Nome" name="nome" onChange={e => setNome(e.target.value)} />
                        <input type="text" placeholder="Data de nascimento" name="dataNas" onChange={e => setDataNasc(e.target.value)} />
                        <input type="text" placeholder="CPF" name="cpf" onChange={e => setCpf(e.target.value)} />
                        <input type="text" placeholder="CEP" name="cep" onBlur={e => handleLoadEndereco(e.target.value)} />

                        <input type="text" placeholder="Endereço" value={endereco} name="endereco" onChange={e => setEndereco(e.target.value)} />
                        <input type="text" placeholder="Bairro" value={bairro} name="bairro" onChange={e => setBairro(e.target.value)}  />
                        <input type="text" placeholder="Cidade" value={cidade} name="cidade" onChange={e => setCidade(e.target.value)}  />
                        <input type="text" placeholder="UF" value={uf} name="UF" onChange={e => setUf(e.target.value)}  />

                        <button onClick={handleSignUp}> 
                            Confirmar
                        </button>
                    </div>
                </div>
        </Container>
    );
}

export default Home;