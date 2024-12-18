import React from "react";
import { logo_n } from "../../assets";
import Footer from "../../components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-gray-100 text-left">
      {/* Header */}

      <div className="w-full h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-yellow-600">
        <a href="/">
          <img className="w-14 lg:w-20" src={logo_n} alt="logo" />
        </a>
      </div>

      {/* Content */}
      <div className="px-6 py-8 max-w-4xl">
        <h1 className="text-gray-800 text-3xl font-bold mb-6">
          Política de Privacidad
        </h1>
        <p className="text-gray-800 text-sm mb-4">
          Última actualización: 17/12/2024
        </p>
        <p className="text-gray-800 text-base mb-4">
          Bienvenido a <strong>Libro Negro</strong>. La privacidad de los
          visitantes y usuarios de nuestro sitio web{" "}
          <a
            href="https://libro-negro-del-trading.com"
            className="text-yellow-600 underline"
          >
            https://libro-negro-negro-del-trading.com
          </a>{" "}
          es una prioridad. A través de esta Política de Privacidad, te
          informamos cómo recopilamos, utilizamos y protegemos tu información
          personal.
        </p>

        {/* Sections */}
        <Section
          title="1. Información que recopilamos"
          content={
            <ul className="list-disc list-inside text-gray-800 text-base">
              <li>
                <strong>
                  Información personal proporcionada voluntariamente:
                </strong>{" "}
                Nombre, correo electrónico, número de teléfono u otros datos que
                envíes voluntariamente al registrarte, descargar material, o
                ponerte en contacto con nosotros.
              </li>
              <li>
                <strong>Información automática:</strong> Dirección IP, tipo de
                navegador, páginas visitadas, y otros datos relacionados con tu
                navegación en nuestro sitio web mediante el uso de cookies o
                tecnologías similares.
              </li>
            </ul>
          }
        />

        <Section
          title="2. Uso de la información"
          content={
            <ul className="list-disc list-inside text-gray-800 text-base">
              <li>
                Proporcionar los servicios ofrecidos en nuestro sitio web.
              </li>
              <li>Responder a tus consultas o solicitudes de información.</li>
              <li>
                Mejorar la experiencia del usuario y optimizar nuestro sitio
                web.
              </li>
              <li>
                Enviar comunicaciones promocionales o actualizaciones (si lo
                autorizaste expresamente).
              </li>
              <li>Cumplir con nuestras obligaciones legales.</li>
            </ul>
          }
        />

        <Section
          title="3. Uso de Cookies"
          content={
            <p className="text-gray-800 text-base">
              Nuestro sitio utiliza cookies para recopilar información
              automática y mejorar la experiencia del usuario. Las cookies
              permiten analizar el comportamiento del usuario, recordar
              preferencias y optimizar nuestro contenido.
              <br />
              <br />
              Puedes configurar tu navegador para que rechace algunas o todas
              las cookies. Sin embargo, desactivarlas podría afectar el
              funcionamiento del sitio.
            </p>
          }
        />

        <Section
          title="4. Compartición de información"
          content={
            <ul className="list-disc list-inside text-gray-800 text-base">
              <li>
                No compartimos, vendemos ni alquilamos tu información personal a
                terceros.
              </li>
              <li>
                Podemos divulgar datos personales en las siguientes
                circunstancias:
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Para cumplir con obligaciones legales o responder a
                    solicitudes judiciales.
                  </li>
                  <li>
                    Para proteger nuestros derechos, propiedad o seguridad.
                  </li>
                  <li>
                    Con proveedores de servicios que nos asistan (por ejemplo,
                    hosting o herramientas de análisis), asegurando su
                    cumplimiento con esta Política.
                  </li>
                </ul>
              </li>
            </ul>
          }
        />

        <Section
          title="5. Seguridad de la información"
          content={
            <p className="text-gray-800 text-base">
              Hemos implementado medidas de seguridad técnicas y organizativas
              para proteger tu información personal contra accesos no
              autorizados, pérdidas o alteraciones. No obstante, ninguna
              transmisión por Internet es completamente segura, por lo que no
              podemos garantizar una seguridad absoluta.
            </p>
          }
        />

        <Section
          title="6. Derechos del usuario"
          content={
            <ul className="list-disc list-inside text-gray-800 text-base">
              <li>Acceder, rectificar o eliminar tus datos personales.</li>
              <li>Solicitar la limitación del procesamiento de tus datos.</li>
              <li>Retirar tu consentimiento en cualquier momento.</li>
            </ul>
          }
        />

        <Section
          title="7. Enlaces externos"
          content={
            <p className="text-gray-800 text-base">
              Nuestro sitio puede contener enlaces a otros sitios web. No somos
              responsables de las políticas de privacidad o prácticas de esos
              sitios externos. Te recomendamos revisar sus respectivas
              políticas.
            </p>
          }
        />

        <Section
          title="8. Cambios en esta Política de Privacidad"
          content={
            <p className="text-gray-800 text-base">
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Te notificaremos cualquier cambio mediante
              la publicación de la versión actualizada en esta página. Te
              recomendamos revisarla periódicamente.
            </p>
          }
        />

        <Section
          title="9. Contacto"
          content={
            <div>
              <p className="text-gray-800 text-base mb-4">
                Si tienes alguna pregunta sobre esta Política de Privacidad o el
                manejo de tus datos personales, puedes contactarnos en:
              </p>
              <ul className="list-none text-gray-800">
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  ignacio.alonso.info@gmail.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +54 9 3812 19‑6460
                </li>
              </ul>
            </div>
          }
        />

        <p className="text-gray-800 text-base mt-6">
          Gracias por confiar en <strong>Libro Negro</strong>.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-gray-800 text-2xl font-bold mb-2">{title}</h2>
    {content}
  </div>
);

export default PrivacyPolicy;
