import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

const sectors = [
  "Enterprise",
  "Government Agency",
  "Financial Institution",
  "Legal Firm",
  "Healthcare Organization",
  "Defense",
  "Other",
];

const planOptions = ["Starter", "Professional", "Government", "Not Sure Yet"];

interface FormState {
  name: string;
  email: string;
  company: string;
  sector: string;
  plan: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  sector: "",
  plan: "",
  message: "",
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.sector) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      if (!actor) throw new Error("Backend not ready. Please try again.");
      // Log the access request as a structured JSON entry on-chain
      await actor.customLog(
        JSON.stringify({
          type: "access_request",
          organizationName: form.company,
          contactName: form.name,
          email: form.email,
          sector: form.sector,
          plan: form.plan,
          message: form.message,
          timestamp: new Date().toISOString(),
        }),
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg(
        "Something went wrong. Please try again or contact us directly.",
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="section-divider mb-0" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 60%, oklch(0.52 0.20 262 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-3xl pt-20">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="text-[10px] font-bold uppercase tracking-[0.20em] text-brand-gold mb-4">
            Get In Touch
          </p>
          <h2 className="section-headline font-display text-foreground mb-5">
            Request Access
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            Fill out the form below and our team will reach out within 24 hours
            to discuss your organization's specific requirements.
          </p>
        </div>

        <div className="glass-card rounded-xl p-8 md:p-10 animate-on-scroll">
          {/* Success state */}
          {status === "success" && (
            <div
              data-ocid="contact.success_state"
              className="flex flex-col items-center text-center py-12"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: "oklch(0.52 0.20 262 / 0.12)",
                  border: "1px solid oklch(0.52 0.20 262 / 0.30)",
                }}
              >
                <CheckCircle2 size={28} className="text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                Request Received
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                Thank you for your interest in SecureVault IC. Our enterprise
                team will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-brand-blue hover:text-brand-blue-light transition-colors underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          )}

          {/* Form */}
          {status !== "success" && (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Error state */}
              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-start gap-3 p-4 rounded-lg text-sm"
                  style={{
                    background: "oklch(0.577 0.245 27 / 0.10)",
                    border: "1px solid oklch(0.577 0.245 27 / 0.28)",
                    color: "oklch(0.72 0.20 27)",
                  }}
                >
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground/85"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    type="text"
                    placeholder="James Harrington"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    autoComplete="name"
                    className="bg-brand-navy-light/40 border-border focus:border-primary/55 focus:ring-primary/18"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground/85"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.email.input"
                    type="email"
                    placeholder="james@meridian.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    autoComplete="email"
                    className="bg-brand-navy-light/40 border-border focus:border-primary/55 focus:ring-primary/18"
                  />
                </div>
              </div>

              {/* Row 2: Company + Sector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="contact-company"
                    className="text-sm font-medium text-foreground/85"
                  >
                    Company / Organization{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-company"
                    data-ocid="contact.company.input"
                    type="text"
                    placeholder="Meridian Capital Bank"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    autoComplete="organization"
                    className="bg-brand-navy-light/40 border-border focus:border-primary/55 focus:ring-primary/18"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground/85">
                    Sector <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={form.sector}
                    onValueChange={(val) => handleChange("sector", val)}
                  >
                    <SelectTrigger
                      data-ocid="contact.sector.select"
                      className="bg-brand-navy-light/40 border-border focus:border-primary/55"
                    >
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {sectors.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Row 3: Plan of interest */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground/85">
                  Plan of Interest
                  <span className="text-muted-foreground font-normal ml-1">
                    (optional)
                  </span>
                </Label>
                <Select
                  value={form.plan}
                  onValueChange={(val) => handleChange("plan", val)}
                >
                  <SelectTrigger
                    data-ocid="contact.plan.select"
                    className="bg-brand-navy-light/40 border-border focus:border-primary/55"
                  >
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {planOptions.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground/85"
                >
                  Message
                  <span className="text-muted-foreground font-normal ml-1">
                    (optional)
                  </span>
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.message.textarea"
                  placeholder="Describe your organization's document security requirements, scale, and any compliance standards you need to meet..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className="bg-brand-navy-light/40 border-border focus:border-primary/55 focus:ring-primary/18 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={status === "loading"}
                className="btn-primary-glow w-full flex items-center justify-center gap-3 py-4 rounded text-base font-bold text-white disabled:opacity-65 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                      data-ocid="contact.loading_state"
                    />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Request Secure Access
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground/55 text-center">
                Your information is encrypted and stored on-chain. Never shared
                with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
