import React from 'react';
import { Page, Document, View, Text } from '@react-pdf/renderer';
import './pdf.css';

function PDF({ name, prenom, adresse, myWilaya, DATE, PI, MSISDN, NumPI, ICCID }) {
 
  return (
    <Document>
      <Page>
        <View className='d'>
          <View className='p'>
            <View className='pdv'>
              <Text className='titre'>Contrat pdv</Text>
            </View>
            <View className='top'>
              <View className='contrat-effet'>
                <View className='date-remis'>
                  <Text>Date de remis :</Text>
                </View>
                <View className='contrat-offre'>
                  <Text>Contrat de l'offre :</Text>
                </View>
                <View className='M001'>
                  <Text>M001</Text>
                </View>
              </View>
              dfddf
            </View>
            <View className='sim-terminal'>
              <Text className="encadrer-un-contenu">Carte sim/terminal</Text>
            </View>
            <View className='caret-sim-terminale'>
              <View className='msisdn-numsim'>
                <View className='msisdn'>
                  <Text>MSISDN:{MSISDN}</Text>
                </View>
                <View className='inputb'>
                  <View className='hhh'></View>
                </View>
                <View className='sim'>
                  <Text>Numero SIM:{ICCID}</Text>
                </View>
                <View className='hhh'></View>
              </View>
              <View className='type-terminal-mi'>
                <View className='type-terminal'>
                  <Text>type du terminal ...</Text>
                </View>
                <View className='mi'>
                  <Text>mi</Text>
                </View>
              </View>
            </View>
            <View className='info-client'>
              <Text className="encadrer-un-contenu">Information client</Text>
              <View className='nom-date'>
                <View className='nom'>
                  <Text>Nom:{name}</Text>
                </View>
                <View className='inputb'>
                  <View className='hhh'></View>
                </View>
                <View className='dn'>
                  <Text>Date de naissance :{DATE}</Text>
                </View>
                <View className='hhh'></View>
              </View>
              <View className='prenom-lieux'>
                <View className='prenom'>
                  <Text>Prenom :{prenom}</Text>
                </View>
                <View className='inputb'>
                  <View className='hhh'></View>
                </View>
                <View className='lieux'>
                  <Text>Lieu de naissance:</Text>
                </View>
              </View>
              <View className='adr-wilaya-c'>
                <View className='adr'>
                  <Text>Adresse :{adresse}</Text>
                </View>
                <View className='inputb'>
                  <View className='hhh'></View>
                </View>
                <View className='wilaya'>
                  <Text>Wilaya:{myWilaya}</Text>
                </View>
                <View className='hhh'></View>
              </View>
              <View></View>
              <View className='confirmation'>
                <Text>Confirmation:</Text>
              </View>
              <View className='numcontrat-email'>
                <View className='numcontart'>
                  <Text>N° contrat:</Text>
                </View>
                <View className='email'>
                  <Text>Email:</Text>
                </View>
              </View>
            </View>
            <View className='pj'>
              <Text className="encadrer-un-contenu">Piece jointe : {PI} </Text>
              <View className='typecarte-num'>
                <View className='msisdn-numsim'>
                  <View className='typepi'>
                    <Text>Type PI :{PI}</Text>
                  </View>
                  <View className='inputb'>
                    <View className='hhh'></View>
                  </View>
                  <View className='NUMPI'>
                    <Text>N° PI :{NumPI}</Text>
                  </View>
                  <View className='hhh'></View>
                </View>
                <View className='type-terminal-mi'>
                  <View className='date'>
                    <Text>Date</Text>
                  </View>
                  <View className='datea'>
                    <Text>A</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='info-client'>
              <Text className="encadrer-un-contenu">Mandataire / tuteur</Text>
              <View className='nom-date'>
                <View className='nom'>
                  <Text>Nom:{name}</Text>
                </View>
                <View className='dn'>
                  <Text>Prenom: {prenom}</Text>
                </View>
              </View>
              <View className='prenom-lieux'>
                <View className='prenom'>
                  <Text>Type PI: {PI}</Text>
                </View>
                <View className='lieux'>
                  <Text>N° PI: {NumPI}</Text>
                </View>
              </View>
              <View className='type-terminal-mi'>
                <View className='date'>
                  <Text>Date</Text>
                </View>
                <View className='datea'>
                  <Text>A</Text>
                </View>
              </View>
            </View>
            <View className='bottom'>
              <View className='signature-client'>
                <View className='label'>
                  <Text className='cadre-cleint'>Cadre Client</Text>
                </View>
                <Text className='signature'>signature</Text>
              </View>
              <View className='cachet-pdf'>
                <Text className='label1'>Cadre réservé à l'agence</Text>
                <Text className='cacher'>cacher à signature</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
