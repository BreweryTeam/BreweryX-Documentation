import React from "react";

interface ConfigItemProps {
    cfgKey: string;
    description?: string | React.ReactNode;
    children?: React.ReactNode;
}

export function ConfigItem({ cfgKey, description, children }: ConfigItemProps) {
    return (
        <details className="mb-4 rounded border border-[var(--sl-border-color,#ddd)] p-2">
            <summary className="cursor-pointer font-bold outline-none">{cfgKey}</summary>
            <div className="ml-4 mt-2">
                {typeof description === "string" ? (
                    description.split("|").map((line, index) => (
                        <p key={index} className="mb-1">{line}</p>
                    ))
                ) : (
                    description
                )}
                <div className="ml-6">{children}</div>
            </div>
        </details>
    );
}

