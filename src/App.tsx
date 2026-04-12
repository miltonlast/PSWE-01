import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styles from './App.module.scss';

type AppFormData = {
  name: string;
  email: string;
};

function App() {
  const [formData, setFormData] = useState<AppFormData>({ name: '', email: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Nombre: ${formData.name}\nCorreo: ${formData.email}`);
  };

  return (
    <main className={styles.pageShell}>
      <Container className={styles.pageWrapper}>
        <Row className="justify-content-center">
          <Col xs={12} xl={11}>
            <Card className={styles.showcaseCard}>
              <Card.Body className={styles.showcaseBody}>
                <div className={styles.brandBadge}>PSWE-01 Experience</div>

                <Row className="g-0 align-items-stretch">
                  <Col lg={6} className={styles.storyColumn}>
                    <div className={styles.storyPanel}>
                      <p className={styles.eyebrow}>Interfaz renovada</p>
                      <h1 className={styles.title}>Un formulario que ahora sí se siente premium.</h1>
                      <p className={styles.subtitle}>
                        Replanteamos la composición para que la experiencia se vea limpia, moderna
                        y confiable desde el primer segundo. Mejor balance visual, mejor ritmo y
                        una presencia mucho más memorable.
                      </p>

                      <div className={styles.featureList}>
                        <article className={styles.featureItem}>
                          <span className={styles.featureKicker}>01</span>
                          <div>
                            <h2>Jerarquía visual clara</h2>
                            <p>
                              Título protagonista, mensajes breves y una estructura que guía la
                              atención sin saturar.
                            </p>
                          </div>
                        </article>

                        <article className={styles.featureItem}>
                          <span className={styles.featureKicker}>02</span>
                          <div>
                            <h2>Más confianza al llenar</h2>
                            <p>
                              Campos con mejor contraste, microcopy útil y una llamada a la acción
                              mucho más evidente.
                            </p>
                          </div>
                        </article>
                      </div>

                      <div className={styles.statsRow}>
                        <div className={styles.statCard}>
                          <strong>+48%</strong>
                          <span>más claridad visual</span>
                        </div>
                        <div className={styles.statCard}>
                          <strong>2x</strong>
                          <span>mejor presencia de marca</span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} className={styles.formColumn}>
                    <div className={styles.formPanel}>
                      <div className={styles.formHeader}>
                        <p className={styles.formIntro}>Comencemos</p>
                        <h2>Comparte tus datos</h2>
                        <p className={styles.formText}>
                          Déjanos tu nombre y correo para continuar con una experiencia más
                          personalizada.
                        </p>
                      </div>

                      <Form onSubmit={handleSubmit} className={styles.formSection}>
                        <Form.Group className={styles.fieldGroup} controlId="name">
                          <Form.Label className={styles.fieldLabel}>Nombre completo</Form.Label>
                          <Form.Control
                            className={styles.inputControl}
                            type="text"
                            name="name"
                            placeholder="Ej. Ana Rodríguez"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group className={styles.fieldGroup} controlId="email">
                          <Form.Label className={styles.fieldLabel}>Correo electrónico</Form.Label>
                          <Form.Control
                            className={styles.inputControl}
                            type="email"
                            name="email"
                            placeholder="ana@empresa.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <div className={styles.formFooter}>
                          <Button className={styles.primaryButton} type="submit">
                            Enviar datos
                          </Button>
                          <p className={styles.helperText}>
                            Tu información se usa únicamente para esta demostración visual.
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
